resource "azurerm_kubernetes_cluster" "aks" {
  name = var.cluster_name
  kubernetes_version = var.kubernetes_version
  location = var.resource_group_location
  resource_group_name = var.resource_group_name
  dns_prefix = var.cluster_name
  #node_resource_group = var.node_resource_group
  default_node_pool {
    name = var.kubernetes_node_pool_name
    #node_count = var.kubernetes_node_pool_count
    vm_size = var.kubernetes_node_pool_vm_size
    type       = var.kubernetes_node_pool_type
    enable_auto_scaling = var.kubernetes_node_pool_enable_auto_scaling
    min_count           = var.kubernetes_node_pool_min_count
    max_count           = var.kubernetes_node_pool_max_count
  }
  identity {
    type = var.kubernetes_identity_type
  }
  network_profile {
    load_balancer_sku = var.kubernetes_network_profile_load_balancer_sku
    network_plugin = var.kubernetes_load_balancer_network_plugin # azure (CNI)
  }
 
    oms_agent {

      log_analytics_workspace_id = var.kubernetes_oms_agent_la_workspace_id
    }
  
  tags = {
    environment = var.kubernetes_tags_environment
    project     = var.kubernetes_tags_project
  }
}


resource "azurerm_kubernetes_cluster_node_pool" "user" {
  name                = var.kubernetes_cluster_node_pool_name
  node_count          = var.kubernetes_cluster_node_pool_count
  vm_size             = var.kubernetes_cluster_node_pool_vm_size
  enable_auto_scaling = var.kubernetes_cluster_node_pool_enable_auto_scaling
  kubernetes_cluster_id = azurerm_kubernetes_cluster.aks.id
}