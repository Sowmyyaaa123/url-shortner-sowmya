import React, { useState } from "react";

import Response from "../../Components/Url Shortner/response";
import Input from "../../Components/Url Shortner/input";

export default function ShortenUrl() {
  const [response, setResponse] = useState(null);

  return (
    <div>
      {
        response ? (
          <Response response={response} />
        ) : (
          <Input setResponse={setResponse} />
        )
      }
    </div>
  );
}