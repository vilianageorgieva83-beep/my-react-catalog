const CourseCard = ({ course }) => {
  return (
    <div className="bg-white rounded-xl shadow p-4">
      <h3 className="text-xl font-bold mb-2">{course.title}</h3>
      <p className="text-gray-500 mb-1">Level: {course.level}</p>
      <p className="text-gray-500 mb-1">Duration: {course.duration}</p>
      <p className="text-gray-500 mb-3">Price: €{course.price}</p>
      <p className="text-sm">{course.description}</p>
    </div>
  );
};

export default CourseCard;
