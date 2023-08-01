import BodyImage from "./bodyImage"
import BlockChildren from "./blockChildren"

export default function ArticleBody({ body }) {
    return body.map((block, i) => {
        switch (block.type) {
            case "block":
                switch (block.style) {
                    case 'normal':
                        switch (block.children[0].text) {
                            case '':
                                return <br/>
                            default:
                                switch (block.listItem) {
                                    case 'bullet':
                                        return <li style={{marginLeft: 15 * (block.level) + 'px'}}><BlockChildren block={block}/></li>
                                    default:
                                        return <p><BlockChildren block={block}/></p>
                                }
                                
                        } 
                    case 'h2':
                        return <h2>
                            <BlockChildren block={block}/>
                        </h2>
                }
            case "bodyImage":
                return <BodyImage src={block.image} alt={block.alt}/>
        }
    })
}