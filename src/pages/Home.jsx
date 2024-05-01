import { useEffect, useState } from "react"

function Home() {

    const [name, setname] = useState('')
    const [email, setemail] = useState('')
    const [password, setpassword] = useState('')

    const [users, setUsers] = useState([]);

    function handelsubmit(e) {

        e.preventDefault()

        fetch(`http://localhost:3000/user`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ name, email, password }),

        })
            .then((data) => {
                console.log(data)

                alert("data added successfully")
                setname("")
                setemail("")
                setpassword("")

            })
            .catch((err) => console.log(err))

    }

    useEffect(() => {
        fetch(`http://localhost:3000/user`)
            .then((res) => res.json())
            .then((data) => {
                console.log(data)
                setUsers(data)
            })
    }, [])



    return (
        <>
            <form onSubmit={handelsubmit}>

                <input type="text" placeholder="enter name" value={name} onChange={(e) => setname(e.target.value)} /><br /><br />
                <input type="text" placeholder="enter email" value={email} onChange={(e) => setemail(e.target.value)} /><br /><br />
                <input type="text" placeholder="enter email" value={password} onChange={(e) => setpassword(e.target.value)} /><br /><br />
                <input type="submit" />
            </form>


            {users.map((v, i) => {
                return (
                    <div key={i} >
                        <h1>{v.id}</h1>
                        <h2>{v.name}</h2>
                        <h3>{v.email}</h3>
                    </div>
                )
            })}


        </>

    )
}

export default Home