<template>
  <div class="p-4">
    <BasicTable @register="registerTable">
      <template #bodyCell="{ column, record, text }">
        <template v-if="column.key === 'id'"> ID: {{ record.id }} </template>
        <template v-else-if="column.key === 'no'">
          <Tag color="green">
            {{ record.no }}
          </Tag>
        </template>
        <template v-else-if="column.key === 'avatar'">
          <Avatar :size="60" :src="record.avatar" />
        </template>
        <template v-else-if="column.key === 'imgArr'">
          <TableImg :size="60" :simpleShow="true" :imgList="text" />
        </template>
        <template v-else-if="column.key === 'imgs'">
          <TableImg :size="60" :imgList="text" />
        </template>

        <template v-else-if="column.key === 'category'">
          <Tag color="green">
            {{ record.no }}
          </Tag>
        </template>
      </template>
    </BasicTable>
  </div>
</template>
<script lang="tsx" setup>
  import { h } from 'vue';
  import { BasicTable, useTable, BasicColumn, TableImg } from '@/components/Table';
  import { Tag, Avatar } from 'ant-design-vue';
  import { demoListApi } from '@/api/demo/table';

  const columns: BasicColumn[] = [
    {
      title: '商品ID',
      dataIndex: 'id',
      // helpMessage: <div>这个是tsx渲染出来的helpMessage</div>,
    },
    {
      title: '商品名',
      dataIndex: 'name',
      width: 100,
      // helpMessage: h('div', '这是vue h函数渲染出来的helpMessage'),
    },
    {
      title: '商品图片',
      dataIndex: 'picture',
      width: 120,
    },
    {
      title: '商品类别',
      dataIndex: 'category',
      width: 80,
      align: 'center',
      defaultHidden: true,
    },
    {
      title: '商品描述',
      dataIndex: 'description',
      width: 120,
    },
    {
      title: '商品尺寸',
      dataIndex: 'size',
      // helpMessage: ['这是简单模式的图片列表', '只会显示一张在表格中', '但点击可预览多张图片'],
      width: 140,
    },
    {
      title: '商品颜色',
      dataIndex: 'color',
      width: 160,
    },
    {
      title: '商品库存',
      dataIndex: 'stock',
    },
    {
      title: '商品成本',
      dataIndex: 'purchasePriceo',
    },
    {
      title: '商品价格',
      dataIndex: 'sellingPrice',
    },
    {
      title: '商品材质',
      dataIndex: 'material',
    },
  ];

  const [registerTable] = useTable({
    title: '商品信息',
    titleHelpMessage: '表格中所有列均可通过右边设置按钮控制显隐和位置',
    api: demoListApi,
    columns: columns,
    bordered: true,
    showTableSetting: true,
  });
</script>
