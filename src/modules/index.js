const express = require('express')
const userModul = require('./users/modul')
const courseModul = require('./courses/modul')
const groupModul = require('./groups/modul')
const homeworkModul = require('./homeworks/modul')
const varify = require('../middlewares/verify')

const router = express.Router()

router
.post('/login', userModul.LoginUser)
.get('/students', userModul.getUsersStudents)
.get('/teacher', userModul.getUsersTeachers)
.get('/teacher/groups', userModul.getTeacherGroups)
.get('/student/groups', userModul.getStudentGroups)

.post('/users', userModul.newUser)
.post('/groups/:id/homeworks', homeworkModul.addHomework)
.post('/course', courseModul.addCourse)
.delete('/users/:id', userModul.deleteUser)
.get('/course', courseModul.getCourses)
.get('/groups/homeworks', groupModul.getGroupHomework)
.get('/groups', groupModul.getGroups)
.get('/course/groups', courseModul.getCourseGroups)

module.exports = router
