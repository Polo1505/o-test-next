import DOMPurify from "isomorphic-dompurify";
import { IReviewProps} from "@/app/lib/definitions"

export default function Review({id,text}:IReviewProps){
    return(
    <div dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(text) }} 
    className=" bg-mygray-400 rounded-[15px] my-auto p-5 min-h-[480px] text-[24px] overflow-hidden" />
    );
}