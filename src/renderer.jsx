import React, { useState, useEffect } from "react";

function WebsiteRenderer() {
  const [websiteData, setWebsiteData] = useState(null);

  useEffect(() => {
    fetch("https://www.google.com")
      .then((response) => response.text())
      .then((data) => setWebsiteData(data));
  }, []);

  return (
    <div className="website-container">
      {websiteData && <div dangerouslySetInnerHTML={{ __html: websiteData }} />}
    </div>
  );
}
export default WebsiteRenderer;
