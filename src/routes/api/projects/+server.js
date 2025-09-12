// src/routes/api/projects/+server.js
import { json } from '@sveltejs/kit';

const projects = [
  // New, real projects
  {
    slug: 'manseong-viz',
    title: '연구소 내 호적 데이터 시각화 연구 (진행중)',
    summary: '조선 후기 호적 자료인 만성대동보의 데이터를 분석하고 인터랙티브 웹 기술을 통해 시각화하여, 일반인과 연구자들이 데이터에 쉽게 접근하고 인사이트를 얻을 수 있도록 돕는 연구 프로젝트입니다.',
    image: 'https://just-publish-kjh-4-1.s3.us-east-1.amazonaws.com/for-profile/mansung_capture.png',
    href: 'https://manseong-daedongbo-viz.vercel.app/'
  },
  {
    slug: 'caviz',
    title: '블록체인 거버넌스 연구',
    summary: '블록체인 네트워크의 의사결정 과정(거버넌스)에서 나타나는 참여자들의 상호작용과 영향력을 시각적으로 분석하여, 거버넌스 모델의 투명성과 효율성을 평가하는 연구입니다.',
    image: 'https://just-publish-kjh-4-1.s3.us-east-1.amazonaws.com/for-profile/caviz_capture.png',
    href: 'https://contextualalliancevis.vercel.app/'
  },
  {
    slug: 'viz-demo',
    title: '데이터 시각화 툴 데모',
    summary: '사용자가 텍스트 데이터를 입력하면 자동으로 워드 클라우드를 생성해주는 간단한 웹 애플리케이션입니다. 데이터 시각화 라이브러리 활용 능력을 보여주는 데모 프로젝트입니다.',
    image: 'https://just-publish-kjh-4-1.s3.us-east-1.amazonaws.com/for-profile/vizdemo_capture.png',
    href: 'https://word-cloud-maker.vercel.app/'
  },
  // Original mock projects
  { slug:'timetable', title:'Timetable Helper', summary:'수업/일정 정리 도우미' },
  { slug:'gallery',   title:'Image Gallery',    summary:'미니 이미지 갤러리' },
  { slug:'memo',      title:'Memo Pad',         summary:'로컬에 메모 저장' }
];

export function GET() {
  return json(projects);
}