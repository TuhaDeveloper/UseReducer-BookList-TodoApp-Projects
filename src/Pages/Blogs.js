import React, { useState } from 'react'
import { Link } from 'react-router-dom';
// import { useNavigate } from 'react-router-dom';
import { blogsData } from '../Data';
const Blogs = () => {
    const [Data, setData] = useState(blogsData)
    return (




        <div>
            <h1>This is Blogs  Component</h1>

            <section>
                {Data.map((data) => {
                    const { id, title, body } = data;
                    return (
                        <article key={id}>
                            <h2>{title}</h2>
                            <p>{body}</p>
                            <Link to={title} state={{ title, body }} >Learn More...</Link>
                        </article>
                    )
                })}
            </section>

        </div>
    )
}

export default Blogs