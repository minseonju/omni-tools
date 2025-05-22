'use client';

import React, { useState } from 'react';
import ToolContent from '@components/ToolContent';
import ToolTextInput from '@components/input/ToolTextInput';
import type { ToolComponentProps } from '@tools/defineTool';
import { diffChars } from 'diff';

const initialValues = {};

export default function TextDiffCheckerTool({
  title,
  longDescription
}: ToolComponentProps) {
  const [left, setLeft] = useState('');
  const [right, setRight] = useState('');
  const [diffResult, setDiffResult] = useState<React.ReactNode>(null);

  const handleCompare = () => {
    const leftLines = left.split('\n');
    const rightLines = right.split('\n');
    const maxLength = Math.max(leftLines.length, rightLines.length);

    const finalResult: React.ReactNode[] = [];

    for (let i = 0; i < maxLength; i++) {
      const leftLine = leftLines[i] || '';
      const rightLine = rightLines[i] || '';

      const charDiff = diffChars(leftLine, rightLine);

      const rendered = charDiff.map((part, idx) => {
        if (part.added) {
          return (
            <span key={idx} className="bg-green-100 text-green-700">
              {part.value}
            </span>
          );
        } else if (part.removed) {
          return (
            <span key={idx} className="bg-red-100 text-red-700 line-through">
              {part.value}
            </span>
          );
        } else {
          return <span key={idx}>{part.value}</span>;
        }
      });

      finalResult.push(
        <pre key={i} className="whitespace-pre-wrap font-mono leading-relaxed">
          {rendered}
        </pre>
      );
    }

    setDiffResult(<div>{finalResult}</div>);
  };

  return (
    <ToolContent
      title={title}
      initialValues={initialValues}
      getGroups={() => []}
      compute={() => {}}
      inputComponent={
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <ToolTextInput title="왼쪽 텍스트" value={left} onChange={setLeft} />
          <ToolTextInput
            title="오른쪽 텍스트"
            value={right}
            onChange={setRight}
          />
          <button
            onClick={handleCompare}
            className="col-span-2 mt-2 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
          >
            Compare
          </button>
        </div>
      }
      resultComponent={
        <div className="p-4 rounded bg-gray-50 border border-gray-200 min-h-[120px]">
          {diffResult || <span className="text-gray-400">Result</span>}
        </div>
      }
      toolInfo={{
        title: '텍스트 비교 도구란?',
        description: longDescription
      }}
    />
  );
}
