import {ref} from "vue";
import {db} from "@/firebase/config";

const getPosts = () => {

    const posts = ref([])

    const error = ref(null)

    const load = async () => {
        try {
            /*let data = await fetch('http://localhost:3000/posts')

            if (!data.ok) {
                throw Error('Tidak Ada Data')
            }
            posts.value = await data.json()*/

            const res = await db.collection('posts')
                .orderBy('createdAt', 'desc')
                .get()

            posts.value = await res.docs.map(doc => {
                return {
                    ...doc.data(),
                    id: doc.id,
                    datetime: doc.data().createdAt.toDate().toDateString()
                }
            })

        } catch (e) {
            error.value = e.message
        }
    }

    return { posts, error, load }
}

export default getPosts
