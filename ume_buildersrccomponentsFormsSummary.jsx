[1mdiff --git a/src/components/Forms/InputLable.jsx b/src/components/Forms/InputLable.jsx[m
[1mindex e62617a..c6e2840 100644[m
[1m--- a/src/components/Forms/InputLable.jsx[m
[1m+++ b/src/components/Forms/InputLable.jsx[m
[36m@@ -4,6 +4,7 @@[m [mimport { BiPlusMedical } from "react-icons/bi";[m
 [m
 const InputLabel = ({ label }) => {[m
   const [skills, setSkills] = useState([""]);[m
[32m+[m[32m  console.log(skills);[m
 [m
   const handleAddSkill = () => {[m
     setSkills([...skills, ""]);[m
[36m@@ -21,7 +22,10 @@[m [mconst InputLabel = ({ label }) => {[m
   };[m
 [m
   return ([m
[31m-    <form onSubmit={(e) => handleSubmit(e)} className="grid grid-cols-1 md:grid-cols-2 gap-10">[m
[32m+[m[32m    <form[m
[32m+[m[32m      onSubmit={(e) => handleSubmit(e)}[m
[32m+[m[32m      className="grid grid-cols-1 md:grid-cols-2 gap-10"[m
[32m+[m[32m    >[m
       {skills.map((skill, index) => ([m
         <div key={index}>[m
           <TextField[m
[1mdiff --git a/src/components/Forms/Personal_InfoFrom.jsx b/src/components/Forms/Personal_InfoFrom.jsx[m
[1mindex cd42ce0..b4ba2ba 100644[m
[1m--- a/src/components/Forms/Personal_InfoFrom.jsx[m
[1m+++ b/src/components/Forms/Personal_InfoFrom.jsx[m
[36m@@ -99,7 +99,7 @@[m [mconst Personal_Info_Formes = () => {[m
         </div>[m
         <button[m
           type="submit"[m
[31m-          className=" max-w-xs border py-2 px-3 rounded-md  bg-primary hover:bg-primary/90 text-white [m
[32m+[m[32m          className=" text-[21px] focus:m-[1px] focus:max-w-[320px] max-w-xs border py-2 px-3 rounded-md  bg-primary hover:bg-primary/90 text-white[m[41m [m
       "[m
         >[m
           Submit[m
