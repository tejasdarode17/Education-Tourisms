import {
    AlertDialog, AlertDialogTrigger, AlertDialogContent, AlertDialogHeader, AlertDialogFooter,
    AlertDialogTitle,
    AlertDialogDescription,
    AlertDialogCancel,
    AlertDialogAction,
} from "@/components/ui/alert-dialog"

import { Button } from "@/components/ui/button"
import { deleteLatestStudent } from "@/Redux/LatestStudents"
import { deleteStudent } from "@/Redux/studentSlice"
import axios from "axios"
import { useDispatch } from "react-redux"
import { useNavigate } from "react-router-dom"

const DeleteStudentButton = ({ studentId }) => {
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const handleDelete = async () => {
        try {
            const response = await axios.delete(`http://localhost:3000/api/v1/admin/delete/${studentId}`, {
                withCredentials: true,
            })
            dispatch(deleteStudent(studentId))
            dispatch(deleteLatestStudent(studentId))
            console.log(response);
            navigate("/admin/students")

        } catch (err) {
            console.error(err)
        }
    }

    return (
        <AlertDialog>
            <AlertDialogTrigger asChild>
                <Button
                    variant="destructive"
                    size="sm"
                    className="cursor-pointer"
                    onClick={(e) => e.stopPropagation()}
                >
                    Delete
                </Button>
            </AlertDialogTrigger>
            <AlertDialogContent>
                <AlertDialogHeader>
                    <AlertDialogTitle>Delete Student?</AlertDialogTitle>
                    <AlertDialogDescription>
                        This action cannot be undone. This will permanently delete the student record.
                    </AlertDialogDescription>
                </AlertDialogHeader>
                <AlertDialogFooter>
                    <AlertDialogCancel onClick={(e) => e.stopPropagation()}>
                        Cancel
                    </AlertDialogCancel>
                    <AlertDialogAction
                        onClick={(e) => {
                            e.stopPropagation();
                            handleDelete();
                        }}
                        className="bg-red-600 hover:bg-red-700 cursor-pointer"
                    >
                        Delete
                    </AlertDialogAction>
                </AlertDialogFooter>
            </AlertDialogContent>
        </AlertDialog>

    )
}


export default DeleteStudentButton