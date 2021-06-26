import {ref} from "vue";
import {db} from "@/firebase/config";

const getPost = (id) => {

    const post = ref(null)

    const error = ref(null)

    const load = async () => {
        try {
            /*let data = await fetch(`http://localhost:3000/posts/${id}`)

            if (!data.ok) {
                throw Error('Tidak Ada Data')
            }
            post.value = await data.json()*/

            const res = await db.collection('posts').doc(id).get()

            if (!res.exists) {
                throw Error('Tidak Ada Data')
            }

            post.value = {
                ...res.data(),
                id: res.id,
                datetime: res.data().createdAt.toDate().toDateString()
            }

        } catch (e) {
            error.value = e.message
        }
    }

    return { post, error, load }
}

export default getPost
