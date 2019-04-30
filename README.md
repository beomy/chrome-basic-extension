# chrome extenstion

크롬 확장 프로그램 기본 앱 만들기 예제입니다.

확장 프로그램이 실행 되면, 페이지가 지속되고 있는 시간을 표시합니다.

## manifest.json

### 필수

<pre><code>"name": "chrome-basic-extension",
"version": "0.0.1",
"manifest_version": 2,</code></pre>

`name`, `version`, `manifest_version` 은 필수 값입니다.

### 옵션

<pre><code>"description": "크롬 기초 확장 프로그램"</code></pre>

`description`은 앱 상세정보에 표시할 앱 정보를 나타냅니다.

<pre><code>"homepage_url": "https://beomy.tistory.com"</code></pre>

`homepage_url` 앱 아이콘으 오른쪽 클릭 후, 메뉴에서 앱 이름을 클릭할 경우 이동할 링크 주소입니다.

<pre><code>"background": {
    "scripts": [
        "background.js"
    ],
    "persistent": true
},</code></pre>

`background`은 확장 프로그램에서 실행 될 자바스크립트 파일을 정의합니다.

<pre><code>"permissions": [
    "https://*/*",
    "http://*/*",
    "tabs"
]</code></pre>

`permissions`은 확장 프로그램을 실행 할 도메인 주소를 정의합니다.

## background.js

### `chrome.browserAction.onClicked.addListener`

크롬 확장프로그램 앱 아이콘을 클릭시 호출되는 이벤트 리스너 입니다.

### `chrome.tabs.executeScript`

실행할 자바스크립트를 정의합니다.

### `chrome.tabs.onUpdated.addListener`

페이지가 업데이트 되었을 때 호출되는 이벤트 리스너입니다. 확장 프로그램을 자동으로 실행시키고 싶을 때 사용 할 수 있습니다.

`changeInfo.status`로 페이지 로딩 상태를 확인할 수 있습니다.

## inject.js

즉시 실행함수로 구성된 자바스크립트 파일입니다.

`chrome.tabs.executeScript`로 실행되는 자바스크립트 파일입니다.