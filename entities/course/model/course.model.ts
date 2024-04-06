export interface IProgress {
  progressPercent: number;
  tariffLessonsCount: number;
  userViewedLessonsCount: number;
}

export type TStudentCourseDescription = {
  id: number;
  shortTitle: string;
  image: string;
  title: string;
  alias: string;
  length: number;
  avgRating: number;
  price: number;
  courseOnDirection: { direction: Record<'name', string> }[];
  tariffs: TTariff[];
  tariff: TariffType;
  progress: IProgress;
};

export type TTariff = {
  id: number;
  name: string;
  price: number;
  type: TariffType;
  oldPrice?: number;
  creditPrice?: number;
  lengthInMonth: number;
  courseId: number;
  createdAt: string;
  videoUuid: string;
};

export enum TariffType {
  free = 'free',
  basic = 'basic',
  mentor = 'mentor',
  project = 'project',
}

export interface IStudentCourseResponse {
  allTariffs: [];
  progress: {};
  rest: TStudentCourseDescription[];
  userTariff: [];
}
