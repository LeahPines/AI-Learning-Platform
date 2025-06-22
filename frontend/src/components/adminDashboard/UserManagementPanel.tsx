import React, { useEffect, useState } from 'react';
import { Card, CardHeader, CardTitle, CardContent } from '../ui/card';
import { useDispatch, useSelector } from 'react-redux';
import { RootState, AppDispatch } from '@/store/store';
import { fetchAllUsers, fetchAllUsersHistory } from '../../store/slices/adminSlice';
import UserHistory from '../history/UserHistory';
import UserListItem from './User';

const UserManagementPanel: React.FC = () => {
    const dispatch = useDispatch<AppDispatch>();
    const users = useSelector((state: RootState) => state.admin.allUsers);
    const loading = useSelector((state: RootState) => state.admin.isLoading);
    const allUsersHistory = useSelector((state: RootState) => state.admin.allUsersHistory);
    const [selectedUser, setSelectedUser] = useState<string | null>(null);

    const userHistory =
        selectedUser
            ? (allUsersHistory.find(user => user.id === selectedUser)?.prompts || [])
            : [];

    useEffect(() => {
        dispatch(fetchAllUsers());
        dispatch(fetchAllUsersHistory());
    }, [dispatch]);

    return (
        <div className="grid lg:grid-cols-2 gap-6">
            <Card>
                <CardHeader>
                    <CardTitle>All Users ({users.length})</CardTitle>
                </CardHeader>
                <CardContent>
                    {users.length > 0 ? (
                        users.map(user => (
                            <UserListItem
                                key={user.id}
                                user={user}
                                isSelected={selectedUser === user.id}
                                onSelect={setSelectedUser}
                            />
                        ))
                    ) : (
                        <div>No users found.</div>
                    )}
                </CardContent>
            </Card>
            <Card>
                <CardHeader>
                    <CardTitle>
                        {selectedUser
                            ? `${users.find(u => u.id === selectedUser)?.name || 'User'}'s History`
                            : 'Select a User'}
                    </CardTitle>
                </CardHeader>
                <CardContent>
                    {selectedUser ? (
                        loading ? (
                            <div>Loading history...</div>
                        ) : userHistory.length > 0 ? (
                            userHistory.map(item => (
                                <UserHistory key={item.id} item={item} />
                            ))
                        ) : (
                            <div>No history found for this user</div>
                        )
                    ) : (
                        <div>Select a user to view their learning history</div>
                    )}
                </CardContent>
            </Card>
        </div>
    );
};

export default UserManagementPanel;