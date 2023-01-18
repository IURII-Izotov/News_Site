import React from "react"
import ContentLoader from "react-content-loader"

export const FilterListItemSkeleton = (props) => (
    <ContentLoader
        speed={2}
        width={168}
        height={24}
        viewBox="0 0 177 24"
        backgroundColor="#f3f3f3"
        foregroundColor="#ecebeb"
        {...props}
    >
        <rect x="35" y="4" rx="4" ry="4" width="140" height="13"/>
        <rect x="5" y="0" rx="4" ry="4" width="22" height="22"/>
    </ContentLoader>
)