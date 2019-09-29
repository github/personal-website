import 'dart:convert';

import 'package:firebase/firebase.dart';
import 'package:firebase/firestore.dart';

import 'classes/index.dart';

class FbFirestore {
  FbFirestore._();
  static Firestore _firestore = firestore();

  static Future<List<FbDocumentSnapshot>> getDocs(String path) async {
    final _data = await _firestore.collection(path).get();
    if (_data == null) return null;
    if (_data?.docs == null || _data.docs.isEmpty) return [];
    List<FbDocumentSnapshot> _items = [];
    _data.docs.forEach((d) {
      _items.add(FbDocumentSnapshot(d.id, data: _getData(d)));
    });
    return _items;
  }

  static Future editDoc(String path, Map<String, dynamic> data,
      {String id}) async {
    if (id == null) {
      await _firestore.collection(path).add(data);
    } else {
      await _firestore.collection(path).doc(id).set(data);
    }
  }

  static Future deleteDoc(String path) async {
    await _firestore.doc(path).delete();
  }

  static Future<FbDocumentSnapshot> getDoc(String path) async {
    final _data = await _firestore.doc(path).get();
    return FbDocumentSnapshot(_data.id, data: _getData(_data));
  }

  static Map<String, dynamic> _getData(DocumentSnapshot d) {
    if (d?.data() == null) return null;
    return json.decode(json.encode(d.data()));
  }
}
