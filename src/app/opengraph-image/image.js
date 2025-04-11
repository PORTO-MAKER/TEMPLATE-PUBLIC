import { ImageResponse } from "next/og";
import { headers } from "next/headers";
import { getUser } from "@/utils";

export const runtime = "edge";

export default async function Image() {
    const headersList = headers();
    const host = headersList.get("host");
    const datas = await getUser(host);

    const name = datas.userData.name;
    const overview = datas.userDetailData.overview;
    const profilePicture = datas.userData.image;

    return new ImageResponse(
        (
            <div
                style={{
                    width: "100%",
                    height: "100%",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "center",
                    backgroundColor: "#000",
                    color: "#fff",
                    fontSize: 48,
                    fontWeight: "bold",
                    padding: "50px",
                    textAlign: "center",
                }}
            >
                {profilePicture && (
                    <img
                        src={profilePicture}
                        width={150}
                        height={150}
                        style={{ borderRadius: "50%", marginBottom: 20 }}
                    />
                )}
                <div>{name}</div>
                <div style={{ fontSize: 24, marginTop: 10 }}>{overview}</div>
            </div>
        ),
        {
            width: 1200,
            height: 630,
        }
    );
}
