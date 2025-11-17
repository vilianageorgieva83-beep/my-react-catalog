import courses from "../courses.json";
import CourseCard from "./CourseCard";

const CourseList = () => {
  const limitedCourses = courses.slice(0, 3);

  return (
    <section className="container m-auto px-10">
      <h2 className="text-3xl text-center ">Available courses</h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {limitedCourses.map((course) => (
          <CourseCard key={course.id} course={course} />
        ))}
      </div>
    </section>
  );
};

export default CourseList;
