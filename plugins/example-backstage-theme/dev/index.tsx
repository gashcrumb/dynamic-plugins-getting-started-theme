import React from 'react';

import {
  Content,
  ContentHeader,
  Header,
  HeaderTabs,
  LinkButton,
  Page,
  Select,
  SupportButton,
  Table,
  TableColumn,
} from '@backstage/core-components';
import { createDevApp } from '@backstage/dev-utils';
import { TestApiProvider } from '@backstage/test-utils';
import { darkThemeProvider, lightThemeProvider } from '../src';

import { makeStyles } from 'tss-react/mui';

const useStyles = makeStyles()(theme => ({
  container: {
    width: 850,
  },
  empty: {
    padding: theme.spacing(2),
    display: 'flex',
    justifyContent: 'center',
  },
}));

const generateTestData: (number: number) => Array<{}> = (rows = 10) => {
  const data: Array<{}> = [];
  while (data.length <= rows) {
    data.push({
      col1: `Some value ${data.length}`,
      col2: `More data ${data.length}`,
      subvalue: `Subvalue ${data.length}`,
      number: Math.round(Math.abs(Math.sin(data.length)) * 1000),
      date: new Date(Math.abs(Math.sin(data.length)) * 10000000000000),
    });
  }

  return data;
};

const testData10 = generateTestData(10);

export const DefaultTable = () => {
  const classes: any = useStyles();
  const columns: TableColumn[] = [
    {
      title: 'Column 1',
      field: 'col1',
      highlight: true,
    },
    {
      title: 'Column 2',
      field: 'col2',
    },
    {
      title: 'Numeric value',
      field: 'number',
      type: 'numeric',
    },
    {
      title: 'A Date',
      field: 'date',
      type: 'date',
    },
  ];

  return (
    <div className={classes.container}>
      <Table
        options={{ paging: false }}
        data={testData10}
        columns={columns}
        title="Backstage Table"
      />
    </div>
  );
};

const SELECT_ITEMS = [
  {
    label: 'test 1',
    value: 'test_1',
  },
  {
    label: 'test 2',
    value: 'test_2',
  },
  {
    label: 'test 3',
    value: 'test_3',
  },
];

createDevApp()
  .addThemes([
    {
      id: 'light',
      title: 'Test Light Theme',
      variant: 'light',
      Provider: lightThemeProvider,
    },
    {
      id: 'dark',
      title: 'Test Dark Theme',
      variant: 'dark',
      Provider: darkThemeProvider,
    },
  ])
  .addPage({
    element: (
      <TestApiProvider apis={[]}>
        <Page themeId="theme">
          <Header title="A Page Header" />
          <HeaderTabs
            selectedIndex={1}
            tabs={[
              {
                id: 'some',
                label: 'Some',
              },
              {
                id: 'tabs',
                label: 'Tabs',
              },
            ]}
          />
          <Content>
            <ContentHeader title="">
              <LinkButton to={''} color="primary" variant="contained">
                Primary Button
              </LinkButton>
              <LinkButton to={''} color="secondary" variant="contained">
                Secondary Button
              </LinkButton>
              <SupportButton>Support</SupportButton>
            </ContentHeader>
            <DefaultTable />
          </Content>
        </Page>
      </TestApiProvider>
    ),
    title: 'Example Page With Table',
    path: '/page-with-table',
  })
  .addPage({
    element: (
      <TestApiProvider apis={[]}>
        <Page themeId="theme">
          <Header title="A Page Header" />
          <Content>
              <Select
                onChange={() => {}}
                placeholder="Select a thing..."
                label="A Select Control"
                items={SELECT_ITEMS}
              />
          </Content>
        </Page>
      </TestApiProvider>
    ),
    title: 'Other Controls',
    path: '/other-controls',
  })
  .render();
