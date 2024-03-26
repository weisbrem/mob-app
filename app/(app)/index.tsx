import { View, Text, StyleSheet } from 'react-native';
import { Colors, Gaps } from '../../shared/tokens';
import { useAtomValue, useSetAtom } from 'jotai';
import { courseAtom, loadCourseAtom } from '../../entities/course/model/course.state';
import { useEffect } from 'react';
import { CourseCard } from '../../entities/course/ui/CourseCard/CourseCard';

export default function MyCourses() {
  const loadCourse = useSetAtom(loadCourseAtom);
  const { courses, status, errorMessage } = useAtomValue(courseAtom);

  const hasCourse = courses.length > 0;

  useEffect(() => {
    loadCourse();
  }, []);

  return (
    <View style={styles.container}>
      {hasCourse && courses.map((course) => <CourseCard {...course} key={course.id} />)}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    gap: Gaps.g18,
    padding: 30,
  },
});
