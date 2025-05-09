import { ImageResponse } from "next/og";
import { getUser } from "@/contributors/testname/utils";
import { headers } from "next/headers";

export const size = {
    width: 1200,
    height: 630,
};

export const contentType = "image/png";

export default async function Image() {
    const headersList = await headers();
    // const host = headersList.get("host");
    const host = "testbug.portoku.live";

    const datas = await getUser(host);

    return new ImageResponse(
        (
            <div
                style={{
                    fontSize: 128,
                    background: "white",
                    width: "100%",
                    height: "100%",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                }}
            >
                <img
                    src={datas.userData.image}
                    alt={datas.userData.name}
                    style={{
                        width: "100%",
                        height: "100%",
                        objectFit: "cover",
                    }}
                />
            </div>
        )
    );
}
