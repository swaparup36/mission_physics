export type TestSeriesType = {
    id: number,
    coverImage: string,
    title: string,
    date: string,
    price: number,
    discount: number,
    discountedPrice: number,
    duration: string,
    totalTests: number,
    reviews: ReviewType[],
    description: string,
    paperSetters: PaperSetterType[],
    features: string[],
    syllabus: string[],
    schedule: ScheduleType[]
}

export type ReviewType = {
    id: number,
    name: string,
    college: string,
    course: string,
    review: string,
    date: string,
}

export type PaperSetterType = {
    id: number,
    name: string,
    designation: string,
    institutiom: string,
    description: string,
}

export type ScheduleType = {
    testName: string,
    startedOn: string,
    endedOn: string,
}