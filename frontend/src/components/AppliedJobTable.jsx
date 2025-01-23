import React from 'react';
import { Table, TableBody, TableCaption, TableCell, TableHead, TableHeader, TableRow } from './ui/table';
import { Badge } from './ui/badge';

const AppliedJobTable = () => {
    const allAppliedJobs = [
        {
            _id: "1",
            createdAt: "2025-01-01T10:00:00Z",
            job: {
                title: "Frontend Developer",
                company: { name: "TechCorp" }
            },
            status: "pending"
        },
        {
            _id: "2",
            createdAt: "2025-01-02T11:00:00Z",
            job: {
                title: "Backend Developer",
                company: { name: "Innovatech" }
            },
            status: "accepted"
        },
        {
            _id: "3",
            createdAt: "2025-01-03T12:00:00Z",
            job: {
                title: "UI/UX Designer",
                company: { name: "DesignHub" }
            },
            status: "rejected"
        }
    ];

    return (
        <div>
            <Table>
                <TableCaption>A list of your applied jobs</TableCaption>
                <TableHeader>
                    <TableRow>
                        <TableHead>Date</TableHead>
                        <TableHead>Job Role</TableHead>
                        <TableHead>Company</TableHead>
                        <TableHead className="text-right">Status</TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody>
                    {
                        allAppliedJobs.length <= 0 ? (
                            <span>You haven't applied for any jobs yet.</span>
                        ) : (
                            allAppliedJobs.map((appliedJob) => (
                                <TableRow key={appliedJob._id}>
                                    <TableCell>{appliedJob?.createdAt?.split("T")[0]}</TableCell>
                                    <TableCell>{appliedJob.job?.title}</TableCell>
                                    <TableCell>{appliedJob.job?.company?.name}</TableCell>
                                    <TableCell className="text-right">
                                        <Badge className={`${
                                            appliedJob?.status === "rejected" 
                                                ? 'bg-red-400' 
                                                : appliedJob.status === 'pending' 
                                                ? 'bg-gray-400' 
                                                : 'bg-green-400'
                                        }`}>
                                            {appliedJob.status.toUpperCase()}
                                        </Badge>
                                    </TableCell>
                                </TableRow>
                            ))
                        )
                    }
                </TableBody>
            </Table>
        </div>
    );
};

export default AppliedJobTable;
