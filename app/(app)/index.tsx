import { View, FlatList, StyleSheet } from 'react-native';
import { useAtomValue, useSetAtom } from 'jotai';
import { courseAtom, loadCourseAtom } from '../../entities/course/model/course.state';
import { useEffect } from 'react';
import { CourseCard } from '../../entities/course/ui/CourseCard/CourseCard';
import { TStudentCourseDescription } from '../../entities/course/model/course.model';

export default function MyCourses() {
  const loadCourse = useSetAtom(loadCourseAtom);
  const { courses, status, errorMessage } = useAtomValue(courseAtom);

  const hasCourse = courses.length > 0;

  const renderCourses = ({ item }: { item: TStudentCourseDescription }) => (
    <View style={styles.course}>
      <CourseCard {...item} />
    </View>
  );

  useEffect(() => {
    loadCourse();
  }, []);

  return (
    <>{hasCourse && <FlatList data={courses} keyExtractor={({ id }) => id.toString()} renderItem={renderCourses} />}</>
  );
}

const styles = StyleSheet.create({
  course: {
    paddingVertical: 9,
    paddingHorizontal: 30,
  },
});
