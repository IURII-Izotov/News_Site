import ContentLoader from "react-content-loader";

export const FullNewsSkeleton = () => {
    return (
        <ContentLoader
            speed={2}
            width={'70vw'}
            height={'100vh'}
            viewBox="0 0 70vw 100vh"
            backgroundColor="#f3f3f3"
            foregroundColor="#ecebeb"
        >
            <rect x="0" y="24" rx="0" ry="0" width="35px" height="35px" />
            <rect x="0" y="24" rx="0" ry="0" width="60vw" height="40" />
            <rect x="0" y="95" rx="0" ry="0" width="100vw" height="50vh" />
            <rect x="0" y="550" rx="0" ry="0" width="100vw" height="29" />
            <rect x="0" y="600" rx="0" ry="0" width="100vw" height="29" />
            <rect x="0" y="650" rx="0" ry="0" width="100vw" height="29" />
            <rect x="0" y="700" rx="0" ry="0" width="29" height="29" />
        </ContentLoader>
    );
};
