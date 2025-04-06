import styled from '@emotion/styled';
import tw from 'twin.macro';

const H1 = styled.h1`
  ${tw`mb-8 text-3xl font-medium uppercase`};
`;

const H2 = styled.h2`
  ${tw`mb-8 text-2xl font-medium`}
`;

const H3 = styled.h3`
  ${tw`mb-8 text-xl font-medium`};
`;

const H4 = styled.h4`
  ${tw`mb-4 uppercase text-sm font-bold`}
`;

const H5 = styled.h5`
  ${tw`font-bold text-sm`}
`;

const Paragraph = styled.p`
  ${tw`mb-8 text-lg leading-relaxed`};
`;

const Blockquote = styled.blockquote`
  ${tw`pl-4 text-gray-700 border-l-2 border-blue-200`}
`;

const UnorderedList = styled.ul`
  ${tw`pl-5 mb-8 list-disc`}

  > li {
    ${tw`mb-4`}
  }
`;

const OrderedList = styled.ol`
  ${tw`pl-5 mb-8 list-decimal`}

  > li {
    ${tw`mb-4`}
  }
`;

const ListElement = styled.li`
  ${tw`text-lg`}
  > p {
    ${tw`mb-0`};
  }
  > blockquote {
    ${tw`mt-4`}
  }
`;

const Anchor = styled.a`
  ${tw`underline text-blue-500`};
`;

export const components = {
  h1: H1,
  h2: H2,
  h3: H3,
  h4: H4,
  h5: H5,
  p: Paragraph,
  ol: OrderedList,
  ul: UnorderedList,
  li: ListElement,
  a: Anchor,
  blockquote: Blockquote,
};