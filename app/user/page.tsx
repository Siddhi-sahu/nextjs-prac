//make sure this is a server component as we are directly talking to db here (the better way to do fetches)
import client from "@/db"

interface UserData {
    name: string;
    email: string | null;
}
async function fetchData(): Promise<UserData> {
    const user = await client.user.findFirst()
    return {


        name: "himani",
        email: user?.email || null

    }
}
export default async function Home() {
    const data = await fetchData()
    return (
        <div>
            {data.name}
            {data.email}
        </div>
    );
}