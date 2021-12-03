import React from 'react';
import { skillArray, experienceArray } from './Data';
import { PageContainer, PageWrapper, SkillH1, SkillH2, SkillRow, ExperienceRow } from './SkillElements';

const SkillList = () => {
  const skillRow = (item, i) => (
    <SkillRow key={i}>
      <div>{item}</div>
    </SkillRow>
  );

  const experienceRow = (item, i) => (
    <ExperienceRow key={i}>
      <div>{item}</div>
    </ExperienceRow>
  );

  return (
    <>
      <PageContainer>
        <PageWrapper>
          <SkillH1>Here are my skills & experience</SkillH1>
          <SkillH2>Skills</SkillH2>
          <div>
            {skillArray.map((item, i) => skillRow(item, i))}
          </div>
          <SkillH2>Experience</SkillH2>
          <div>
            {experienceArray.map((item, i) => experienceRow(item, i))}
          </div>
        </PageWrapper>
      </PageContainer>
    </>
  )
}

export default SkillList
