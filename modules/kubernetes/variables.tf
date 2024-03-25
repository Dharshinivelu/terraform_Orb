variable "resource_group_name" {
  type        = string
  default     = "ODL-azure-1178542"
  description = "Resource group name in your Azure subscription."
}

variable "resource_group_location" {
  type        = string
  default     = "westus"
  description = "Location of the resource group."
}

variable "cluster_name" {
  type = string
  description = "AKS name in Microsoft Azure"
}

variable "kubernetes_version" {
  type = string
  description = "Kubernetes version"
}

variable "kubernetes_node_pool_name" {
    #default = "agentpool"
}

variable "kubernetes_node_pool_count" {
    #default = 2
}

variable "kubernetes_node_pool_vm_size" {
    #default = "Standard_DS2_v2"
}

variable "kubernetes_node_pool_type" {
    #default = "VirtualMachineScaleSets"
}

variable "kubernetes_node_pool_enable_auto_scaling" {
    #default = true
}

variable "kubernetes_node_pool_min_count" {
    #default = 1
}

variable "kubernetes_node_pool_max_count" {
    #default = 2
}

variable "kubernetes_identity_type" {
    #default = "SystemAssigned"
}

variable "kubernetes_network_profile_load_balancer_sku" {
    #default = "standard"
}

variable "kubernetes_load_balancer_network_plugin" {
    #default = "kubenet"
}

variable "kubernetes_oms_agent_la_workspace_id" {
    #default = "terra-workspace-test"
}

variable "kubernetes_tags_environment" {
    #default = "env"
}

variable "kubernetes_tags_project" {
    #default = "dev"
}

variable "kubernetes_cluster_node_pool_name" {
    #default = "bulk"
}

variable "kubernetes_cluster_node_pool_count" {
    #default = 1
}

variable "kubernetes_cluster_node_pool_vm_size" {
    #default = "Standard_E2as_v5"
}

variable "kubernetes_cluster_node_pool_enable_auto_scaling" {
    #default = false
}
