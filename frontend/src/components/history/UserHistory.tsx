const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
        hour: '2-digit',
        minute: '2-digit',
    });
};
const UserHistory = ({ item }) => {
    return (
        <div key={item.id} className="mb-2">
            <div>{item.prompt}</div>
            <div className="text-xs text-gray-500">{formatDate(item.createdAt)}</div>
            <details>
                <summary className="cursor-pointer text-blue-600 hover:text-blue-800">View Response</summary>
                <div className="mt-2 p-3 bg-white rounded border text-gray-800 whitespace-pre-wrap overflow-x-auto">
                    {item.response}
                </div>
            </details>
        </div>
    )
}
export default UserHistory;