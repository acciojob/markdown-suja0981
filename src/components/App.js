import React,{useState,useEffect} from "react";
import ReactMarkdown from "react-markdown";
import "../styles/App.css";

const App=()=>{
    const[markdown,setMarkdown]=useState("");
    const [loading, setloading] = useState(false);
    
    useEffect(() => {
      setloading(false);
    },[markdown]);
    
    const handlechange=(e)=>{
        setloading(true);
        setMarkdown(e.target.value);

    };

    return(
        <div className="app">
            <textarea
            className="textarea"
            value={markdown}
            onChange={handlechange}
            placeholder="Write your markdown here.."
            />
            <div className="preview">
                {loading ? (
                    <p className="loading">Loading...</p>
                ):(
                    <ReactMarkdown>{markdown}</ReactMarkdown>
                )}

            </div>
        </div>
    );
};

export default App;
