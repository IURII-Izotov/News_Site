import ContentLoader from "react-content-loader";

export const FullNewsSkeleton = () => {
    return (
        <ContentLoader
            speed={2}
            width={845}
            height={500}
            viewBox="0 0 845 500"
            backgroundColor="#f3f3f3"
            foregroundColor="#ecebeb"
            {...props}
        >
            <rect x="67" y="47" rx="0" ry="0" width="1" height="2" />
            <rect x="-123" y="95" rx="0" ry="0" width="845" height="280" />
            <rect x="4" y="24" rx="0" ry="0" width="603" height="59" />
            <rect x="2" y="387" rx="0" ry="0" width="536" height="29" />
            <rect x="2" y="387" rx="0" ry="0" width="536" height="29" />
            <rect x="2" y="387" rx="0" ry="0" width="536" height="29" />
        </ContentLoader>
    );
};
