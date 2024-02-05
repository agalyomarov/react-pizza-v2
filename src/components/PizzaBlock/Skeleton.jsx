import React from "react"
import ContentLoader from "react-content-loader"

const Skeleton = () => (
   <div className="pizza-block-wrapper">
      <ContentLoader
         className="pizza-block"
         speed={2}
         width={280}
         height={465}
         viewBox="0 0 280 465"
         backgroundColor="#f3f3f3"
         foregroundColor="#ecebeb"
      >
         <circle cx="140" cy="120" r="120" />
         <rect x="0" y="270" rx="10" ry="10" width="280" height="20" />
         <rect x="0" y="313" rx="10" ry="10" width="280" height="85" />
         <rect x="0" y="428" rx="10" ry="10" width="96" height="26" />
         <rect x="123" y="419" rx="20" ry="20" width="155" height="45" />
      </ContentLoader>
   </div>
)

export default Skeleton