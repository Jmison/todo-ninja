import firebase from '/firebase/app'
import 'firebase/firestore'

// <!-- Initialize Firebase -->
<script src="/__/firebase/init.js"></script>
const db = firebase.firestore();

db.settings({ timestampsInSnapshots: true  })
export default db;