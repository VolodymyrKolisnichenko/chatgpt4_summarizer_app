import { useState, useEffect } from "react"
import { copy, linkIcon, loader, tick } from "../assets"

const Demo = () => {
    const [article, setArcticle] = useState({
        url: '',
        summary: '',
    });
    const handleSubmit = async (e) => {
        alert('submit')
    }
    return (
        <section className="mt-16 w-full max-w-xl">
            <div className="flex flex-col w-full gap-2">
                <form
                    className="relative flex justify-center items-center"
                    onSubmit={() => {handleSubmit}}>
                    <img
                        src={linkIcon}
                        alt="link_icon"
                        className="absolute left-0 my-2 ml-3 w-5">
                    </img>
                    <input
                        type="url"
                        placeholder="Enter a URL"
                        value={article.url}
                        onChange={(e) => setArcticle({ ...article,
                        url: e.target.value})}
                        required
                        className="url_input peer"
                    />
                    
                    <button
                        type="submit"
                        className="submit_btn 
                        peer-focus:border-gray-700 
                        peer-focus:text-gray-700">
                            ↵
                    </button>
                </form>
                    {/* Browse URL history*/}
            </div>
            {/* Display Results */}
        </section>
    )
}

export default Demo