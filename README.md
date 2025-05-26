<div align="center">
        <img src="src/assets/logo.png" width="300" />
        <br /><br />
<img width="1235" alt="스크린샷 2025-05-26 오후 7 25 03" src="https://github.com/user-attachments/assets/7aa73c35-3332-46ad-87d3-5a56eb3a5598" />

</div>

OmniTools는 일상 업무를 간편하게 만들어주는 다양한 온라인 도구를 제공하는 자체 호스팅 웹 애플리케이션입니다.
코딩, 이미지/비디오 처리, PDF 변환, 숫자 계산 등 다양한 작업을 웹에서 손쉽게 처리할 수 있도록 지원합니다.

이번에 OmniTools에 다음 두 가지 도구가 새롭게 추가되었습니다:

- QR 코드 생성기(QrCodeGenerator): URL이나 일반 텍스트를 입력하면 QR 코드 이미지를 생성해주는 도구
- 텍스트 비교기(Text Diff Checker): 두 입력값의 차이점을 하이라이팅해 시각적으로 비교할 수 있는 도구




## Requirements



## Docker image



## Docker container

## How to exit


## Directory Structure

```bash
omni-tools/
├── .github/                     # GitHub Actions 및 워크플로우 설정
├── .idea/                       # JetBrains IDE 설정 파일
├── .vitest/                     # Vitest 테스트 설정
├── .vscode/                     # VSCode 편집기 설정
├── @types/                      # 프로젝트 전역 타입 정의
├── public/                      # 정적 파일(이미지, 아이콘 등)
├── scripts/                     # 빌드 및 배포 스크립트
├── src/                         # 주요 소스 코드
│   └── pages/
│       └── tools/
│           └── string/
│               ├── qr-generator/        # QR 코드 생성기 도구
│               │   ├── index.tsx        # 주요 기능 컴포넌트
│               │   ├── service.ts       # 외부 API 정의
│               │   └── meta.ts          # 도구 메타 정보 정의
│               │  
│               └── text-diff-checker/   # 텍스트 비교 도구
│ 
├── .dockerignore                # Docker 빌드 제외 파일 목록
├── .editorconfig                # 코드 스타일 설정
├── .eslintrc                    # ESLint 설정
├── .gitignore                   # Git 추적 제외 파일 목록
├── .prettierrc                  # Prettier 코드 포맷 설정
├── Dockerfile                   # Docker 이미지 빌드 설정
├── LICENSE                      # 프로젝트 라이선스
├── README.md                    # 프로젝트 설명 파일
├── img.png                      # 프로젝트 이미지
├── index.html                   # 기본 HTML 템플릿
├── package-lock.json            # 의존성 버전 고정 파일
├── package.json                 # 프로젝트 메타 정보 및 의존성 목록

```

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.
