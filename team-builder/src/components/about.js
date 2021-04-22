import react from 'react'
import styled from 'styled-components'
import info from'../resources/info.jpg'

const Div = styled.div`
.cont{
    background-color:cadetblue;
    padding-top:2%;
    padding-bottom:30%;
}
.header{
    color:lightgrey;
    font-size:3.5rem;
    border-bottom: thin dotted blue;
    padding-bottom:5%
}
p{
    color:lightgrey;
    width:50%;
    margin: 0 auto;
}
.info{
    width:50%;
    height:50%;
    object-fit:cover;
}

`

export default function About (){
    return<div>
        <Div>
        <div className="cont">
        <h1 className="header"> About</h1>
        <div>
            <img className="info" src={info}/>
        </div>  
        <div className="body">
        <h2>Explore the possibities of react</h2>
        <p>At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae. Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat.</p>
        </div> 
        <div>
        <p>At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae. Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat.</p>
        </div>
        </div>
        </Div>
    </div>
}