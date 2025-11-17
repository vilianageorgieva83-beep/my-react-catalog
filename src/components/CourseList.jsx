import courses from "../courses.json";
import CourseCard from "./CourseCard";

const CourseList = () => {
  return (
    <section className="px-4 py-10">
      <h2 className="text-3xl font-bold mb-6 text-center">Available courses</h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {courses.map((course) => (
          <CourseCard key={course.id} course={course} />
        ))}
      </div>
    </section>
  );
};

export default CourseList;
