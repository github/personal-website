import 'package:fb_auth/data/blocs/blocs.dart';
import 'package:flutter/material.dart';
import 'package:flutter_bloc/flutter_bloc.dart';

class LoginScreen extends StatefulWidget {
  static const String routeName = '/login';
  @override
  _LoginScreenState createState() => _LoginScreenState();
}

class _LoginScreenState extends State<LoginScreen> {
  final _formKey = GlobalKey<FormState>();
  final _scaffoldKey = GlobalKey<ScaffoldState>();
  String _email, _password;
  bool _hidePassword = true;
  @override
  Widget build(BuildContext context) {
    final _auth = BlocProvider.of<AuthBloc>(context);
    return BlocListener<AuthBloc, AuthState>(
      listener: (context, authState) {
        if (authState is AuthErrorState) {
          _scaffoldKey.currentState.showSnackBar(
            SnackBar(content: Text(authState.message)),
          );
        }
      },
      child: BlocBuilder<AuthBloc, AuthState>(
        builder: (context, state) => Scaffold(
          key: _scaffoldKey,
          appBar: AppBar(),
          body: Form(
            key: _formKey,
            child: ListView(
              children: <Widget>[
                ListTile(
                  title: TextFormField(
                    initialValue: _email,
                    decoration: InputDecoration(
                      hintText: 'Username',
                      prefixIcon: Icon(Icons.account_circle),
                    ),
                    validator: (val) => val.isNotEmpty ? null : 'Required!',
                    onSaved: (val) => _email = val,
                  ),
                ),
                ListTile(
                  title: TextFormField(
                    initialValue: _email,
                    decoration: InputDecoration(
                      hintText: 'Password',
                      prefixIcon: Icon(Icons.lock),
                      suffixIcon: IconButton(
                        icon: Icon(_hidePassword
                            ? Icons.visibility_off
                            : Icons.visibility),
                        onPressed: () {
                          if (mounted)
                            setState(() => _hidePassword = !_hidePassword);
                        },
                      ),
                    ),
                    obscureText: _hidePassword,
                    validator: (val) => val.isNotEmpty ? null : 'Required!',
                    onSaved: (val) => _password = val,
                  ),
                ),
                ListTile(
                  title: RaisedButton(
                    child: Text('Login'),
                    onPressed: () {
                      if (_formKey.currentState.validate()) {
                        _formKey.currentState.save();
                        _auth.dispatch(LoginEvent(_email, _password));
                      }
                    },
                  ),
                ),
              ],
            ),
          ),
        ),
      ),
    );
  }
}
