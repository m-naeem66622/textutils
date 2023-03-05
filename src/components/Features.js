import React from 'react'
import Accordion from './Accordion'

function Features(props) {
    document.title = "TextUtils | Features";

    const accordionContent = [
        { id: "One", header: "#1 Ease of Use", body: "Immediately after you have added the files to be processed and entered the first amendment, you already see the first results and the files can be saved as new files. You can go into any detail at the functions, and exploit more and more opportunities. Despite these, the program's interface is also clear for the casual user.", expand: true },
        { id: "Two", header: "#2 Upper and Lower Case", body: "With just one click it is possible to print the entire document in uppercase or lowercase letters. It is also possible to write every word with an uppercase beginning or to to rotate upper and lower case characters randomly in mixed-mode, as it is very popular among young people, that seems to be cool.", expand: false },
        { id: "Three", header: "#3 Find And Remove Extra Spaces", body: "Replacing Text or Lines: You can replace any number of white spaces (even multi-line text passages) by just a single space (both can also be carried out with regular expressions). The same is possible in terms of lines. When replacing lines, you can simply indicate a line, that will be replaced by a single space regardless of the content of this line. You can also apply more than one of these replacements at one time.", expand: false },
        { id: "Four", header: "#4 Preview Text", body: "Without destroying the original file, you will see the effect of your settings in the preview box (bottom left) immediately after selecting an option. If you prefer, you can view the original file next to the changed file so that you are able to review any changes directly or, for example when replacing text, you can copy the text to be replaced direclty from the original source without opening this file. It is also possible to display only the original or the changed file individually, for example, if your screen is not big enough for a full presentation. Of course, furthermore, it is also possible to disable the preview at any time, for example when editing very large files or you have a slow computer, so the immediate display does not work smoothly.", expand: false }
    ]

    return (

        <div className='container'>
            <h1 className={`text-center text-${props.theme.text} my-2`}>{props.title}</h1>
            <div className="accordion my-5" id="accordionExample">
                {
                    accordionContent.map((elem, key) =>
                        <Accordion theme={props.theme} key={key} data={elem} />
                    )
                }
            </div>
        </div>
    )
}

export default Features
