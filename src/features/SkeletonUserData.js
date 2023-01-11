import ContentLoader from "react-content-loader";

export const SkeletonUserData = () => {
    return (
        <ContentLoader
            speed={2}
            width={'70%'}
            height={229}
            viewBox="0 0 663 229"
            backgroundColor="#f3f3f3"
            foregroundColor="#ecebeb"
        >
            <rect x="67" y="47" rx="0" ry="0" width="1" height="2" />
            <circle cx="106" cy="105" r="100" />
            <rect x="6" y="210" rx="0" ry="0" width="199" height="16" />
            <rect x="226" y="5" rx="0" ry="0" width="368" height="37" />
            <rect x="226" y="52" rx="0" ry="0" width="368" height="37" />
            <rect x="226" y="102" rx="0" ry="0" width="368" height="37" />
            <rect x="464" y="195" rx="0" ry="0" width="128" height="38" />
        </ContentLoader>
    );
};
