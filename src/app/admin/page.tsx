import { currentUser } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";
import AdminDashboardClient from "./AdminDashboardClient";

async function AdminPage() {
    const user = await currentUser();

    if (!user) redirect("/");

    const adminEmail = process.env.ADMIN_EMAIL;
    const userEmail = user.emailAddresses[0]?.emailAddress;

    if (!adminEmail || userEmail !== adminEmail) { redirect("/dashboard"); }
    console.log("Admin access granted to:", userEmail);
    console.log("Admin email from env:", adminEmail);


    return <div>
        <AdminDashboardClient />
    </div>;
}

export default AdminPage;       