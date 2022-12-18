
import {NewsItem} from "../NewsItem/NewsItem";
import {Comment} from "../Comment/Comment";
export const FullNews = () => {
    return (
        <>
        <NewsItem fullItem={true}/>
            <Comment/>
            <Comment isReplay={true}/>
            <Comment/>
            <Comment isReplay={true}/>
            <Comment isReplay={true}/>
            <Comment isReplay={true}/>
        </>
    );
};
