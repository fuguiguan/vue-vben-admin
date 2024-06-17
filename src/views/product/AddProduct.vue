<template>
  <PageWrapper title="添加商品">
    <BasicForm @register="register" @submit="handleSubmit" />
  </PageWrapper>
</template>
<script lang="ts">
  import { defineComponent } from 'vue';
  import { PageWrapper } from '@/components/Page';
  import { BasicForm, FormSchema, useForm } from '/@/components/Form/index';
  import { CollapseContainer } from '/@/components/Container/index';
  import { useMessage } from '/@/hooks/web/useMessage';

  const schemas: FormSchema[] = [
    {
      field: 'category',
      component: 'Input',
      label: '商品分类',
      required: true,
      layout: 'vertical',
      colProps: {
        span: 12,
      },
      componentProps: {
        placeholder: '请选择',
        onChange: (e: any) => {
          console.log(e);
        },
      },
    },
    {
      field: 'name',
      component: 'Input',
      label: '商品名称',
      layout: 'vertical',
      colProps: {
        span: 12,
      },
      componentProps: {
        placeholder: '请选择',
        onChange: (e: any) => {
          console.log(e);
        },
      },
    },
    {
      field: 'name',
      component: 'Input',
      label: '商品货号',
      colProps: {
        span: 12,
      },
      componentProps: {
        placeholder: '请选择',
        onChange: (e: any) => {
          console.log(e);
        },
      },
    },
    {
      field: 'count',
      component: 'Input',
      label: '商品数量',
      colProps: {
        span: 12,
      },
      componentProps: {
        placeholder: '请选择',
        onChange: (e: any) => {
          console.log(e);
        },
      },
    },
    {
      field: 'size',
      component: 'Input',
      label: '商品尺码',
      colProps: {
        span: 12,
      },
      componentProps: {
        placeholder: '请选择',
        onChange: (e: any) => {
          console.log(e);
        },
      },
    },
    {
      field: 'cost',
      component: 'Input',
      label: '商品成本',
      colProps: {
        span: 12,
      },
      componentProps: {
        placeholder: '请选择',
        onChange: (e: any) => {
          console.log(e);
        },
      },
    },
    {
      field: 'price',
      component: 'Input',
      label: '商品售价',
      colProps: {
        span: 12,
      },
      componentProps: {
        placeholder: '请选择',
        onChange: (e: any) => {
          console.log(e);
        },
      },
    },
    {
      field: 'title',
      component: 'Input',
      label: '商品标题',
      colProps: {
        span: 12,
      },
      componentProps: {
        placeholder: '请选择',
        onChange: (e: any) => {
          console.log(e);
        },
      },
    },
    {
      field: 'description',
      component: 'Input',
      label: '商品描述',
      colProps: {
        span: 12,
      },
      componentProps: {
        placeholder: '请选择',
        onChange: (e: any) => {
          console.log(e);
        },
      },
    },
  ];
  export default defineComponent({
    components: { BasicForm, CollapseContainer },
    setup() {
      const { createMessage } = useMessage();
      const [register, { setProps }] = useForm({
        labelWidth: 120,
        schemas,
        actionColOptions: {
          span: 24,
        },
      });
      return {
        register,
        schemas,
        handleSubmit: (values: any) => {
          createMessage.success('click search,values:' + JSON.stringify(values));
        },
        setProps,
      };
    },
  });
</script>
