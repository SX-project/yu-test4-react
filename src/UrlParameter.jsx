import { useParams, useLocation } from "react-router";

export const UrlParameter = () => {
    const { id } = useParams();
    const {search} = useLocation();
    const query = new URLSearchParams(search);

    return(
        <div>
            <h1>Url Parameterです。</h1>
            <p>{id}です</p>
            <p>nameは{query.get("name")}です</p>
        </div>
    )
}