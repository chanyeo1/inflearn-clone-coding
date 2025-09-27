export default function DashboardDetailPage({ params, searchParams }) {
    console.log(params);
    return <main>Dashboard Detail Page {params.id} {searchParams.code}</main>
}