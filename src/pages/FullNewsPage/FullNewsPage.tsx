
import {NewsItem} from "../../components/NewsItem/NewsItem";
import {Comment} from "../../components/Comment/Comment";
export const FullNewsPage = () => {
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
