import { TFetchStatus } from '../../../shared/common.types';
import { TStudentCourseDescription } from './course.model';

export interface ICourseState {
  courses: TStudentCourseDescription[];
  status: TFetchStatus;
  errorMessage: string | null;
}
