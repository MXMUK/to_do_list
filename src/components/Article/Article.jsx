import React from 'react'

import './Article_module.scss'
import Main from "../Main/Main";


function Article({active}) {
  return (
    <div className='article'>
        <div className={active ? 'wrapper smaller' : 'wrapper'}>
            <div className="main">
                <Main />
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati maiores ducimus natus dolorem ad cupiditate, sint quia! Repellendus, exercitationem natus? Veniam rerum dolores suscipit ratione error molestiae, ullam voluptates sed?
                Asperiores minima, deleniti ducimus nulla sequi delectus corrupti. Debitis mollitia ut voluptas asperiores cum animi quod qui vitae esse unde, minus illo doloremque aperiam. Dignissimos facere blanditiis distinctio fugiat excepturi?
                Adipisci provident fugit autem. Obcaecati aperiam cumque laboriosam pariatur voluptatem perferendis ducimus dignissimos dicta enim veniam, natus repudiandae explicabo dolore, voluptas, dolor quam nemo non quaerat vitae? Asperiores, corrupti quos?
                Porro alias exercitationem nisi nobis nihil atque quod eius voluptates similique officiis consequatur temporibus accusantium voluptas nam ea eum consectetur, veniam consequuntur impedit. Molestias vero repudiandae modi expedita ipsa cumque?
                Laboriosam, ab quae, architecto ipsam, magnam veniam debitis eum officia commodi deserunt quam numquam tenetur odio nemo nihil molestiae voluptate. Non provident enim esse deleniti repudiandae exercitationem debitis dicta error?
                Facilis rem exercitationem doloribus ullam quas, dolorum illo id laborum quidem, atque consequatur provident molestiae asperiores sequi esse? Corporis itaque, cum id aspernatur similique iure beatae esse blanditiis odit unde.
                Explicabo ducimus, corrupti nihil dolores ullam quaerat suscipit numquam, dolor neque ea eveniet fuga perferendis nobis ipsam quo similique voluptatem. Placeat eos itaque laborum similique sapiente totam ea. Explicabo, voluptate?
            </div>
        </div>
    </div>
  )
}

export default Article