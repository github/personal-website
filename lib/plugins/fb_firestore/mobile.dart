import 'dart:convert';

import 'package:cloud_firestore/cloud_firestore.dart';

import 'classes/index.dart';

class FbFirestore {
  FbFirestore._();
  static Firestore _firestore = Firestore.instance;
  static Future<List<FbDocumentSnapshot>> getDocs(String path) async {
    final _data = await _firestore.collection(path).getDocuments();
    if (_data == null) return null;
    if (_data?.documents == null || _data.documents.isEmpty) return [];
    List<FbDocumentSnapshot> _items = [];
    _data.documents.forEach((d) {
      _items.add(FbDocumentSnapshot(d.documentID, data: _getData(d)));
    });
    return _items;
  }

  static Future editDoc(String path, Map<String, dynamic> data,
      {String id}) async {
    if (id == null) {
      await _firestore.collection(path).add(data);
    } else {
      await _firestore.collection(path).document(id).setData(data);
    }
  }

  static Future<FbDocumentSnapshot> getDoc(String path) async {
    final _data = await _firestore.document(path).get();
    return FbDocumentSnapshot(_data.documentID, data: _getData(_data));
  }

  static Future deleteDoc(String path) async {
    await _firestore.document(path).delete();
  }

  static Map<String, dynamic> _getData(DocumentSnapshot d) {
    if (d?.data == null) return null;
    return json.decode(json.encode(d.data));
  }
}
